import { useRouter } from 'next/router';

export default function TournamentId() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <div>
        <h1>Estas en el evento con id : {id}</h1>
      </div>
    </>
  );
}
