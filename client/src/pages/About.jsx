export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About DevBlogs
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to DevBlogs! This blog was created as a personal project
              by a passionate developer who loves to write about technology,
              coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              like web development, software engineering, and programming
              languages. I'm always learning and exploring new technologies, so
              be sure to check back often for new content!
            </p>

            <p>
              We encourage you to comment on our posts and interact with other
              readers. You can like other people's comments and reply to them.
              We believe that a community of learners can help each other grow
              and progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
