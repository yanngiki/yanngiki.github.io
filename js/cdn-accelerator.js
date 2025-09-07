// 在页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有图片元素
    const images = document.querySelectorAll('img');
    
    // 遍历所有图片
    images.forEach(img => {
        const originalSrc = img.src;
        const originalSrcset = img.srcset;
        
        // 处理src属性
        if (originalSrc) {
            img.src = convertToCDNUrl(originalSrc);
        }
        
        // 处理srcset属性（响应式图片）
        if (originalSrcset) {
            img.srcset = convertSrcsetToCDN(originalSrcset);
        }
    });
});

/**
 * 将GitHub图片URL转换为带加速节点的URL
 * @param {string} url - 原始图片URL
 * @returns {string} 转换后的URL
 */
function convertToCDNUrl(url) {
    // 匹配GitHub仓库中的图片URL模式
    const githubPatterns = [
        // 匹配 GitHub Raw 链接 (raw.githubusercontent.com)
        /^https?:\/\/raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/(.*)$/,
        // 匹配 GitHub 仓库图片链接 (github.com/.../blob/...)
        /^https?:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.*)$/
    ];
    
    // 检查是否匹配GitHub图片URL
    for (const pattern of githubPatterns) {
        const match = url.match(pattern);
        if (match) {
            // 提取仓库信息和文件路径
            const [, user, repo, branch, path] = match;
            // 构建通过加速节点访问的URL
            return `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${path}`;
        }
    }
    
    // 非GitHub图片URL，返回原始URL
    return url;
}

// /**
//  * 处理srcset属性中的多个图片URL
//  * @param {string} srcset - 原始srcset属性值
//  * @returns {string} 转换后的srcset值
//  */
// function convertSrcsetToCDN(srcset) {
//     // 分割srcset中的各个图片定义
//     return srcset.split(',').map(item => {
//         // 分离URL和分辨率描述
//         const parts = item.trim().split(/\s+/);
//         if (parts.length >= 1) {
//             parts[0] = convertToCDNUrl(parts[0]);
//         }
//         return parts.join(' ');
//     }).join(', ');
// }
