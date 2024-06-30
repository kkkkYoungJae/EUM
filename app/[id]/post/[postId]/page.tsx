type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `${params.id} • 어쩌구` };
}

export default function Page({ params }: Params) {
  return <h1>id: {params.id}</h1>;
}
