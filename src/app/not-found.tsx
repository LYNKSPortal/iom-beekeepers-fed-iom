import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hexagon } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-svh flex items-center justify-center bg-forest-2 text-cream grain relative px-6">
      <div className="relative z-10 text-center">
        <Hexagon className="mx-auto h-14 w-14 text-honey fill-honey/10" strokeWidth={1.2} />
        <h1 className="display-1 mt-8">404</h1>
        <p className="display-3 mt-4 text-cream/80">This frame is empty.</p>
        <p className="mt-4 text-cream/50 max-w-md mx-auto">
          The page you were looking for has flown off, let&rsquo;s get you back to the apiary.
        </p>
        <Button asChild variant="honey" size="lg" className="mt-10">
          <Link href="/">Back to the hive</Link>
        </Button>
      </div>
    </section>
  );
}
