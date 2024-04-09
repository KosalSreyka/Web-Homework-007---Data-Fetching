export async function getMovieService() {
  const res = await fetch("https://movie-api-get-only-bmc3.vercel.app/api", {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
}

export async function getMovieById(id) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
}
export async function getMovieByGenreAction() {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=Action`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
}
export async function getMovieByGenreScience_Fiction() {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=Science Fiction`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}

export async function getMovieByGenreDrama() {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=Drama`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
}
export async function getMovieByGenreAnimie() {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=Anime`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
}
export async function getMovieByGenreHollywood() {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api?genre=Hollywood`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return data;
}
