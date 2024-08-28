import{_ as t,Y as a,Z as c,$ as e,a0 as n,a1 as i,a2 as r,F as s}from"./framework-ba388aaf.js";const g={},h=r('<hr><h1 id="文章标题" tabindex="-1"><a class="header-anchor" href="#文章标题" aria-hidden="true">#</a> 文章标题</h1><p>title: OpenCV-color in BGR order you must know</p><h1 id="设置写作时间" tabindex="-1"><a class="header-anchor" href="#设置写作时间" aria-hidden="true">#</a> 设置写作时间</h1><p>date: 2022-08-18</p><h1 id="一个页面可以有多个分类" tabindex="-1"><a class="header-anchor" href="#一个页面可以有多个分类" aria-hidden="true">#</a> 一个页面可以有多个分类</h1><p>category:</p><ul><li>CV</li></ul><h1 id="一个页面可以有多个标签" tabindex="-1"><a class="header-anchor" href="#一个页面可以有多个标签" aria-hidden="true">#</a> 一个页面可以有多个标签</h1><p>tag:</p><ul><li>OpenCV</li></ul><h1 id="此页面会在文章列表置顶" tabindex="-1"><a class="header-anchor" href="#此页面会在文章列表置顶" aria-hidden="true">#</a> 此页面会在文章列表置顶</h1><p>sticky: false</p><h1 id="此页面会出现在文章收藏中" tabindex="-1"><a class="header-anchor" href="#此页面会出现在文章收藏中" aria-hidden="true">#</a> 此页面会出现在文章收藏中</h1><p>star: true</p><h1 id="侧边栏的顺序" tabindex="-1"><a class="header-anchor" href="#侧边栏的顺序" aria-hidden="true">#</a> 侧边栏的顺序</h1><h1 id="数字越小越靠前-支持非整数和负数-比如-10-9-5-3-2-order-为-10-的文章会最靠上。" tabindex="-1"><a class="header-anchor" href="#数字越小越靠前-支持非整数和负数-比如-10-9-5-3-2-order-为-10-的文章会最靠上。" aria-hidden="true">#</a> 数字越小越靠前，支持非整数和负数，比如 -10 &lt; -9.5 &lt; 3.2, order 为 -10 的文章会最靠上。</h1><h1 id="个人偏好将非干货或随想短文的-order-设置在-0-01-到-0-99-将干货类长文的-order-设置在-1-到负无穷。每次新增文章都会在上一篇的基础上递减-order-值。" tabindex="-1"><a class="header-anchor" href="#个人偏好将非干货或随想短文的-order-设置在-0-01-到-0-99-将干货类长文的-order-设置在-1-到负无穷。每次新增文章都会在上一篇的基础上递减-order-值。" aria-hidden="true">#</a> 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。</h1><h2 id="order-1" tabindex="-1"><a class="header-anchor" href="#order-1" aria-hidden="true">#</a> order: -1</h2>',19),p={href:"https://github.com/SueGK/Courses/blob/main/pyimagesearch-opencv-17-day-course/OpenCV-Mynotes/opencv_BGR_color.ipynb",target:"_blank",rel:"noopener noreferrer"},d=r(`<pre><code>import os
import numpy as np
import argparse
import cv2
import matplotlib.pyplot as plt
</code></pre><p>The original picture looks like:</p><figure><img src="https://cdn-images-1.medium.com/max/2000/0*gMD-zYzvJWZegLIH.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>The OpenCV assumes images are in BGR channel order. OpenCV imread, imwrite and imshow all work with the BGR order, so the image won&#39;t change if we use cv2.imshow to show the image. But it doesn&#39;t work with matplotlib.</p><p>Most image processing library use the RGB ordering such as matplotlib so if use plt.imshow, the color of the logo changed.</p><pre><code>img = cv2.imread(&quot;logo.png&quot;)

# show the image by cv2
# The cv2.imshow() and cv.imshow() functions from the opencv-python package are incompatible with Jupyter notebook;
# see https://github.com/jupyter/notebook/issues/3935.
# As a replacement, you can use the following function:
from google.colab.patches import cv2_imshow
cv2_imshow(img)
</code></pre><figure><img src="https://cdn-images-1.medium.com/max/2000/1*Ixo3Bu6gZwaoAGhT64Rlyg.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code># show the image by matplotlib
plt.subplot(111)
plt.imshow(img)
plt.title(&quot;Original&quot;)
</code></pre><figure><img src="https://cdn-images-1.medium.com/max/2000/1*sqd7CCalX7L04M21PYdCvA.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>If we want to read image in RGB order in OpenCV, we can use:</p><p>img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)</p><pre><code># read images in RGB order in OpenCV
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
from google.colab.patches import cv2_imshow
cv2_imshow(img_rgb)
plt.imshow(img_rgb)
</code></pre><figure><img src="https://cdn-images-1.medium.com/max/2000/1*b6K55FOZwp3tePqYe-DERg.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>cv2.imread(FILENAME, FLAG)</strong></p><p>There are some flags:</p><p><strong>cv2.IMREAD_UNCHANGED:</strong> read the image as is from the source(with alpha channel). If the source image is an RGB, it loads the image into array with Red, Green and Blue channels.</p><p><strong>cv2.IMREAD_COLOR:</strong> convert image to the 3 channel BGR color image but no transparency channel</p><p><strong>cv2.IMREAD_GRAYSCALE:</strong> convert image to the single channel grayscale image</p>`,18),l={href:"https://docs.opencv.org/3.4/d8/d6a/group__imgcodecs__flags.html#ga61d9b0126a3e57d9277ac48327799c80",target:"_blank",rel:"noopener noreferrer"},m=r(`<pre><code>img = cv2.imread(&#39;logo.png&#39;, cv2.IMREAD_UNCHANGED)
cv2_imshow(img)
plt.imshow(img)
</code></pre><figure><img src="https://cdn-images-1.medium.com/max/2000/1*d_zvffWdR2cnGDKDOuG0DA.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>img = cv2.imread(&#39;logo.png&#39;, cv2.IMREAD_COLOR)
cv2_imshow(img)
plt.imshow(img)
</code></pre><figure><img src="https://cdn-images-1.medium.com/max/2000/1*bz2dYJPqveXPof4lw4f24A.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>img = cv2.imread(&#39;logo.png&#39;, cv2.IMREAD_GRAYSCALE)
cv2_imshow(img)
</code></pre><figure><img src="https://cdn-images-1.medium.com/max/2000/1*yYNiNY657JdYVMZMLnqlVg.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Let&#39;s have a look at the BGR channel. If we want to print the whole array then set np.set_printoptions(threshold=np.inf) and set it back to default after print the array. np.set_printoptions(threshold=1000</p><pre><code>img = cv2.imread(&#39;logo.png&#39;, cv2.IMREAD_COLOR)
cv2_imshow(img)
b = img[:,:,0] # get blue channel
g = img[:,:,1] # get green channel
r = img[:,:,2] # get red channel

print(b)
</code></pre><figure><img src="https://cdn-images-1.medium.com/max/2000/1*aLUmFMIu3E8WJ6zMM0_t8g.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>np.set_printoptions(threshold=np.inf)
print(b)
np.set_printoptions(threshold=1000)

# the output is really long so I won&#39;t print it here.
</code></pre><p>Now let&#39;s convert it to <strong>RGB</strong> channel. Even though we read image in RGB order but the logo color will change if we use cv2.imshow to show the image because it works with <strong>BGR</strong> order. plt.imshow show the original color of the image because it works with <strong>RGB</strong> order as well.</p><pre><code># read images in RGB order in OpenCV
img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
from google.colab.patches import cv2_imshow
cv2_imshow(img_rgb)
plt.imshow(img_rgb)
</code></pre><figure><img src="https://cdn-images-1.medium.com/max/2000/1*abBgvTaTAg_wKCYiWBMuPQ.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><pre><code>r1 = img_rgb[:,:,0] # get blue channel
g1 = img_rgb[:,:,1] # get green channel
b1 = img_rgb[:,:,2] # get red channel

(img[:,:,0] == img_rgb[:,:,2]).all()

Output: True
</code></pre><p>When you try to draw a rectangle box in OpenCV, be careful that the color of rectangle is also in <strong>BGR</strong> order.</p><pre><code># read the image
image = cv2.imread(&#39;logo.png&#39;)

# represents the top left corner of rectangle
start_point = (5, 5)

# represents the bottom right corner of rectangle
end_point = (20, 20)

# choose the rectangle color in BGR
color = (0, 0, 255) # red

# thickness of lines that make up the rectangle is 2 px
thickness = 2

# draw a rectangle with red line borders of thickness of 2 px
image = cv2.rectangle(image, start_point, end_point, color, thickness)

# Displaying the image
cv2_imshow(image)
</code></pre>`,16),u=e("img",{src:"https://cdn-images-1.medium.com/max/2000/1*J3rSiqjnPRM1D04oPitI1Q.png",alt:"",loading:"lazy"},null,-1),f={href:"https://medium.com/mlearning-ai/mlearning-ai-submission-suggestions-b51e2b130bfb",target:"_blank",rel:"noopener noreferrer"},_=e("strong",null,"Mlearning.ai Submission Suggestions",-1),b=e("em",null,"How to become a writer on Mlearning.ai",-1);function w(v,R){const o=s("ExternalLinkIcon");return a(),c("div",null,[h,e("p",null,[n("Wanna play around with the code? "),e("a",p,[n("Link"),i(o)])]),d,e("p",null,[n("Check more flags here: "),e("a",l,[n("OpenCV: Flags used for image file reading and writing"),i(o)])]),m,e("p",null,[u,e("a",f,[_,b,n("medium.com"),i(o)])])])}const y=t(g,[["render",w],["__file","2022-08-18.html.vue"]]);export{y as default};
