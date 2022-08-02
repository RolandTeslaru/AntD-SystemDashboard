import React, { useEffect, useState } from 'react';
import { Drawer, Skeleton } from 'antd';
import useFetchData from './service';

const CareerDetails = ({ player, visible, onClose }) => {

    const [details, setDetails] = useState({});
    const [isLoading, output] = useFetchData('./' + player.replace(' ', '_') + '.json');
    const { name, country, age, born, profession, activity } = output;

    return (
        <Drawer
            destroyOnClose
            title={player}
            visible={visible}
            width={640}
            onClose={onClose}
        >
            <Skeleton active loading={isLoading} paragraph={{ rows: 4 }} >
                <div style={{ padding: 10 }}>
                    <p>Country - {country}</p>
                    <p>age - {age}</p>
                    <p>born - {born}</p>
                    <p>Profession - {profession}</p>
                    <p>Favorite activities - {activity}</p>

                </div>
            </Skeleton>
        </Drawer>
    )
}

export default CareerDetails;