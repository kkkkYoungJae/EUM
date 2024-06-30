type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `이음의 ${params.id}님` };
}

export default function Page({ params }: Params) {
  return <h1>id: {params.id}</h1>;
}
