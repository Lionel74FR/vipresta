import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="glow absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2" />
      <p className="font-display text-7xl text-gold-gradient">404</p>
      <h1 className="text-3xl sm:text-4xl">Cette page n&apos;existe pas</h1>
      <p className="max-w-md text-muted">
        Le lien que vous avez suivi est peut-être obsolète. Revenons à l&apos;essentiel.
      </p>
      <Link
        href="/"
        className="btn-gold rounded-full px-9 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em]"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
