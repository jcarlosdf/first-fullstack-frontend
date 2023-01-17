import { useRouter } from 'next/router';

export default function PostId() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <div>
        <h1>Estás en el post: {id}</h1>
      </div>
    </>
  );
}
