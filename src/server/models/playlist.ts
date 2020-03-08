module.exports = function(sequelize, DataTypes) {
    const Playlist = sequelize.define('Playlist', {
        name: DataTypes.STRING,
        spotify_created: DataTypes.BOOLEAN,
        tracks: DataTypes.JSONB,

        created_at: DataTypes.DATE
    });

    return Playlist;
};
