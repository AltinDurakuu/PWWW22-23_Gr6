const mBlogContairer = document.querySelector('.main-blog-container');
console.log(mBlogContairer);
const mBlogs = Array.from(mBlogContairer.querySelectorAll('.main-blog'));

function showBlog(n) {
  console.log(n);
    mBlogs.forEach(mBlog => mBlog.classList.remove('main-blog--active'));
    mBlogs[n].classList.add('main-blog--active');
}