// 1. FIX LỖI SSL TRÊN HOSTING (BẮT BUỘC ĐỂ DÒNG ĐẦU TIÊN)

const API_URL = 'https://api2.hbw.com.vn/graphql';

// Hàm định dạng ngày tháng
export function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString('vi-VN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

// --- CORE FETCH FUNCTION (Tối ưu cho Hosting yếu) ---
async function fetchAPI(query: string, { variables }: any = {}) {
  const headers = { 'Content-Type': 'application/json' };
  
  // Tạo bộ điều khiển để ngắt kết nối nếu quá lâu (Timeout)
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 giây timeout

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      signal: controller.signal, // Gắn bộ ngắt tín hiệu
      next: { revalidate: 3600 }, // Cache 1 tiếng (Giảm tải CPU cực tốt)
    });

    // Xóa timeout khi đã tải xong
    clearTimeout(timeoutId);

    const json = await res.json();
    if (json.errors) {
      console.error("❌ GraphQL Error:", json.errors);
      return null; 
    }
    return json.data;
  } catch (error) {
    // Chỉ log lỗi, không làm sập app
    console.error("❌ API Error (Timeout or Network):", error);
    return null;
  }
}

// ---------------------------------------------------------
// 1. LẤY CHI TIẾT BÀI VIẾT (Kèm xử lý Link nội bộ chuẩn SEO)
// ---------------------------------------------------------
export async function getPostBySlug(slug: string) {
  const query = `
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        id
        slug
        title
        date
        content
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        modified
      }
    }
  `;

  const data = await fetchAPI(query, { variables: { id: slug } });
  const post = data?.post;

  if (!post) return null;

  // --- XỬ LÝ NỘI DUNG: CHUYỂN LINK TUYỆT ĐỐI THÀNH TƯƠNG ĐỐI ---
  let processedContent = post.content || "";

  // Regex "Bắt dính" mọi biến thể domain (http, https, www, dấu nháy đơn/kép)
  const domainRegex = /href=(["'])https?:\/\/(www\.)?api\.hbw\.com\.vn\/?/g;

  // Thay thế bằng: href="/ (Giữ nguyên dấu nháy gốc $1 để HTML không bị lỗi)
  processedContent = processedContent.replace(domainRegex, 'href=$1/');

  // Map dữ liệu chuẩn cấu trúc
  return {
    ...post,
    title: { rendered: post.title }, 
    content: { rendered: processedContent }, // Nội dung đã xử lý link
    excerpt: { rendered: post.excerpt },
    _embedded: {
      'wp:featuredmedia': post.featuredImage?.node 
        ? [{ 
            sourceUrl: post.featuredImage.node.sourceUrl, // Cho code mới
            source_url: post.featuredImage.node.sourceUrl // Cho code cũ
          }] 
        : []
    },
    'wp:term': [post.categories?.nodes || []]
  };
}

// ---------------------------------------------------------
// 2. LẤY DANH SÁCH BÀI VIẾT (Hỗ trợ Load More / Pagination)
// ---------------------------------------------------------
export async function getPostsByCategory(categorySlug: string, first: number = 6, after: string | null = null) {
  const query = `
    query GetPostsByCategory($categoryName: String, $first: Int, $after: String) {
      posts(
        where: { categoryName: $categoryName, orderby: { field: DATE, order: DESC } }
        first: $first
        after: $after
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          slug
          title
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const data = await fetchAPI(query, { variables: { categoryName: categorySlug, first, after } });
  
  const posts = data?.posts?.nodes || [];
  const pageInfo = data?.posts?.pageInfo || { hasNextPage: false, endCursor: null };

  // Transform data
  const mappedPosts = posts.map((post: any) => {
    const imgUrl = post.featuredImage?.node?.sourceUrl || null;
    
    return {
      ...post,
      title: { rendered: post.title },
      excerpt: { rendered: post.excerpt },
      _embedded: {
        'wp:featuredmedia': imgUrl 
          ? [{ 
              sourceUrl: imgUrl, 
              source_url: imgUrl 
            }] 
          : []
      }
    };
  });

  // Luôn trả về Object chuẩn cấu trúc (tránh lỗi .slice is not a function)
  return { 
    posts: mappedPosts, 
    pageInfo 
  };
}

// ---------------------------------------------------------
// 3. LẤY TOÀN BỘ BÀI VIẾT (Dùng cho Sitemap / Static Params)
// ---------------------------------------------------------
export async function getAllPosts() {
  const query = `
    query GetAllPosts {
      posts(first: 100) {
        nodes {
          slug
          date
          modified
        }
      }
    }
  `;

  const data = await fetchAPI(query);
  return data?.posts?.nodes || [];
}

// Tương thích ngược với các file cũ nếu có
export async function getAllPostSlugs() {
    const posts = await getAllPosts();
    return posts;
}
