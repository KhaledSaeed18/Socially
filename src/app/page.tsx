import { getPosts } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import CreatePost from "@/components/CreatePost";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { Suspense } from 'react';

const WhoToFollow = React.lazy(() => import('@/components/WhoToFollow'));
const PostCard = React.lazy(() => import('@/components/PostCard'));

export default async function Home() {
  const user = await currentUser();
  const posts = await getPosts();
  const dbUserId = await getDbUserId();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        {user ? <CreatePost /> : null}

        <div className="space-y-6">
          <Suspense fallback={<div>Loading...</div>}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} dbUserId={dbUserId} />
            ))}
          </Suspense>
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <Suspense fallback={<div>Loading...</div>}>
          <WhoToFollow />
        </Suspense>
      </div>
    </div>
  );
}