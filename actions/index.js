//Action creator
export const selectSong = (song) => {
    //retrun an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};