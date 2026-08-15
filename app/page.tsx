// Internal workspace sites can read the authenticated OpenAI user from the
// forwarded request headers:
//
// import { headers } from "next/headers";
//
// export default async function Home() {
//   const requestHeaders = await headers();
//   const email = requestHeaders.get("oai-authenticated-user-email");
//   const encodedFullName = requestHeaders.get("oai-authenticated-user-full-name");
//   const fullName =
//     encodedFullName &&
//     requestHeaders.get("oai-authenticated-user-full-name-encoding") ===
//       "percent-encoded-utf-8"
//       ? decodeURIComponent(encodedFullName)
//       : null;
//   const displayName = fullName ?? email;
//   // ...
// }

"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [src, setSrc] = useState("/verrerie-labo.html");
  useEffect(() => setSrc(`/verrerie-labo.html${window.location.search}`), []);
  return <iframe title="Matériel Labo" src={src} className="app-frame" />;
}
