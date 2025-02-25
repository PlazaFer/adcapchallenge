import { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { useBackendApi } from "@/context/BackendApiProvider";
import { ArtworkResponse } from "@/types/Artwork";
import { FIELDS_PARAMS } from "@/constants/apiParameters";

const useArtworksApi = () => {
  const BackendApi = useBackendApi();
  const [data, setData] = useState<ArtworkResponse[]>([]);
  const [dataDetail, setDataDetail] = useState<ArtworkResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");

  const fetchArtworks = async (reset = false) => {
    if (!hasMore && !reset) return;

    setIsLoading(true);
    setError(null);
    try {
      const url = reset
        ? `/artworks?page=1&limit=6&${FIELDS_PARAMS}`
        : `${nextPageUrl}&${FIELDS_PARAMS}`;
      if (!url) return;
      const response = await BackendApi.get(url);
      const newData = response.data.data;
      const pagination = response.data.pagination;

      if (reset) {
        setData(newData);
        setNextPageUrl(pagination.next_url || null);
      } else {
        setData((prevData) => [...prevData, ...newData]);
        setNextPageUrl(pagination.next_url || null);
      }

      setHasMore(!!pagination.next_url);
      setQuery("");
    } catch (err) {
      setError("Error fetching artworks");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchArtworkById = async (id: string) => {
    setIsLoading(true);

    try {
      const url = `/artworks/${id}?${FIELDS_PARAMS}`; 
      const response = await BackendApi.get(url);
      const { data } = response;
      const responseData = data.data;

      setDataDetail(responseData);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const searchArtworks = useCallback(
    debounce(async (searchQuery: string, reset = false) => {
      if (!hasMore && !reset) return;

      setIsLoading(true);
      setError(null);
      try {
        const newPage = reset ? 1 : currentPage + 1;
        const url = `/artworks/search?q=${searchQuery}&page=${newPage}&limit=6&${FIELDS_PARAMS}`;
        const response = await BackendApi.get(url);
        const newData = response.data.data;

        if (reset) {
          setData(newData);
          setCurrentPage(1);
        } else {
          setData((prevData) => [...prevData, ...newData]);
          setCurrentPage(newPage);
        }

        setHasMore(newData.length > 0);
        setQuery(searchQuery);
      } catch (err) {
        setError("Error searching artworks");
      } finally {
        setIsLoading(false);
      }
    }, 500),
    [currentPage, hasMore]
  );

  const resetPagination = () => {
    setNextPageUrl(null);
    setCurrentPage(1);
    setHasMore(true);
    setQuery("");
  };

  return {
    data,
    isLoading,
    error,
    fetchArtworks,
    searchArtworks,
    fetchArtworkById,
    hasMore,
    query,
    dataDetail,
    resetPagination,
  };
};

export default useArtworksApi;
