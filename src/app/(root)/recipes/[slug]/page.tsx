export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <section>
      <h1>Recipe: {slug}</h1>
    </section>
  );
}
