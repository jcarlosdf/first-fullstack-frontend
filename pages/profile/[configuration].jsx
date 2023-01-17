import { useRouter } from 'next/router';

export default function Configuration() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <div>
        <h1>Estas en Configuration del perfil: {id}</h1>
      </div>
    </>
  );
}
