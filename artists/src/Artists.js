import {useEffect, useState} from 'react';

function Artists() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchArtists = async () => {
            const response = await fetch('http://127.0.0.1:8000/artists');
            const result = await response.json();
            //console.log(result)
            setData(result);
        };

        fetchArtists();
    }, []);

    const borderStyle = {
        border: '1px solid black'
    };

    const textStyle = {
        overflow: 'hidden',          // Hide overflow text
        whiteSpace: 'nowrap',        // Prevent text from wrapping
        textOverflow: 'ellipsis',     // Show ellipsis for overflow text
        width: '500px',              // Set a fixed width
        padding: '10px',             // Optional: add some padding
        fontSize: '16px',            // Optional: set font size
    };

    const getArtist = a => {
        return (
            <tr>
                <td><img src={a.img_url} width={100}></img></td>
                <td style={borderStyle}>{a.name}</td>
                <td style={borderStyle}>
                    <div title={a.info} style={textStyle}>{a.info}</div>
                </td>
                <td style={borderStyle}>{a.genre}</td>
                <td>
                    <span>
                        <img src={a.thumb1} width={50}></img>
                    </span>
                    <span>
                        <img src={a.thumb2} width={50}></img>
                    </span>
                    <span>
                        <img src={a.thumb3} width={50}></img>
                    </span>
                </td>
            </tr>
        )
    };

    return (
        <div>
            <table style={borderStyle}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Info</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map(x => getArtist(x))}
                </tbody>
            </table>
        </div>
    );
}

export default Artists;