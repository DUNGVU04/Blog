import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about Java?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with Java Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.codewithfaraz.com/article/131/explore-50-java-projects-with-source-code-for-all-skill-levels"
            target="_blank"
            rel="noopener noreferrer"
          >
            Java Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://e0.pxfuel.com/wallpapers/226/1020/desktop-wallpaper-java-programming-logo.jpg" />
      </div>
    </div>
  );
}
