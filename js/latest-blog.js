const mBlogContairer = document.querySelector('.main-blog-container');
const mBlogs = Array.from(mBlogContairer.querySelectorAll('.main-blog'));
window.onload=showBlog(0);



function showBlog(n) {
  try {
    if (n>=mBlogs.length || n<0) {
      throw new TypeError();
    }
  } catch (error) {
    alert("Sorry! Article doesn't exist.");
    return;
  }  
  mBlogs.forEach(mBlog => mBlog.classList.remove('main-blog--active'));
  mBlogs[n].classList.add('main-blog--active');
}