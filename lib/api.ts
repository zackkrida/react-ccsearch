import useSWR from "swr";
const API_BASE = "https://api.creativecommons.engineering/v1/";

const fetcher = (url) => fetch(url).then((r) => r.json());

export const useSources = ({ limit = 500 } = { limit: 500 }) => {
  const { data: sources = [] }: { data?: Source[] } = useSWR(
    API_BASE + `sources?limit=${limit}&format=json`,
    fetcher
  );
  return sources;
};

interface Source {
  source_name: string;
  display_name: string;
  source_url: string;
  logo_url?: string;
}
