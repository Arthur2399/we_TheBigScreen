import './TopHeadquartersData.css';

export const TopHeadquartersData = ({name_branch,stars}) => {
    return (
        <tbody>
            <tr>
                <td>{name_branch}</td>
                <td>{stars} pts.</td>
            </tr>
        </tbody>
    )
}
