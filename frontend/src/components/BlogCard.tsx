import { Link } from "react-router-dom";
import { formattedDate } from "../helperFunctions";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}
export const BlogCard = (props: BlogCardProps) => {
  return (
    <Link to={`/blog/${props.id}`}>
      <div className=" w-screen p-4 flex justify-center cursor-pointer">
        <div className=" w-3xl border-b-slate-200 border-b-1">
          <div className="flex flex-col gap-2 min-h-44 overflow-hidden">
            <div className="flex gap-2 items-center mb-1">
              <div className="flex gap-2 items-center">
                <div className="rounded-full bg-gray-500 text-white px-4 py-2">
                  {props.authorName[0]}
                </div>
                <p className="text-slate-600 font-semibold">
                  {props.authorName}
                </p>
              </div>
              <p className="text-xl">&#8226;</p>
              <span className="text-slate-400 font-thin">
                {formattedDate(props.publishedDate)}
              </span>
            </div>
            <div>
              <div>
                <p className="font-semibold text-2xl mb-1">
                  {`${props.title.slice(0, 50)} ${
                    props.title.length > 50 ? "..." : ""
                  }`}{" "}
                </p>
              </div>
              <div className="h-10">
                <p className="font-thin text-xl text-gray-600">{`${props.content.slice(
                  0,
                  200
                )} ${props.content.length > 200 ? "..." : ""}`}</p>
              </div>
            </div>
          </div>
          <div className="text-slate-700 font-thin mt-5">
            {`${Math.floor(props.content.length / 100)} min read`}
          </div>
        </div>
      </div>
    </Link>
  );
};
