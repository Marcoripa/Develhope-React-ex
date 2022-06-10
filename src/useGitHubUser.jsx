import useSWR from 'swr';

const fetcher = url=> fetch(url).then((res) => res.json())

export function useFetch(url) {

     const {data, error, mutate} = useSWR(url, fetcher)
   
       return {data, error, isLoading: !data && !error, onRefresh: mutate}
}