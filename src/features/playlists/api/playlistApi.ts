import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type { PlaylistsResponse} from "@/features/playlists/api/playlistsApi.types.ts";

export const playlistsApi = createApi({
    reducerPath: 'playlistsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://musicfun.it-incubator.app/api/1.0/',
        headers: {
            'API-KEY': 'f5f67943-1b44-41ee-8cd2-e48e43faf8e4',
        },
    }),
    endpoints: (build) => ({
        fetchPlaylists: build.query<PlaylistsResponse, void>({
            query: () => 'playlists',
        }),
    }),
})

export const { useFetchPlaylistsQuery } = playlistsApi