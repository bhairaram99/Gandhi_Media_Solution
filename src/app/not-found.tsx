import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="gms-section grid min-h-[70vh] place-items-center bg-[#090d1e] pt-[130px]">
      <Container className="text-center">
        <Image
          src="/assets/images/theme/modules/404/assets/images/404-image.png"
          alt="404"
          width={860}
          height={520}
          className="mx-auto"
        />
        <h1 className="mt-8 text-5xl font-bold text-white">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-xl text-[#b9bdcc]">
          The page you are looking for has moved or does not exist.
        </p>
        <Link href="/" className="gms-btn gms-btn-primary mt-7 inline-flex">
          Back To Home
        </Link>
      </Container>
    </section>
  );
}
