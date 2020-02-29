module.exports = function(sequelize, DataTypes) {
    const Playlist = sequelize.define('Playlist', {
        name: DataTypes.STRING,
        origin: DataTypes.STRING,
        origin_type: DataTypes.INTEGER,
        spotify_created: DataTypes.BOOLEAN,
        tracks: DataTypes.JSONB
    });

    return Playlist;
};
