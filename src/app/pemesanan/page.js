import FormPemesananPage from "@/components/form/FormPemesanan";

export default async function Page({ searchParams }) {
  const paket = (await searchParams)?.paket || "";

  return <FormPemesananPage paket={paket} />;
}
