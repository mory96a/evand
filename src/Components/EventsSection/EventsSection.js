import React from 'react';
import StyledEventsSection from "./EventsSection.styles";
import { Text, Icon } from '../Kit';
import moment from "moment-jalaali";

type Props = {
    event: Object
};

const EventsSection = ({event}: Props) => {

    const {cover, name, organization, start_date,_links} = event;
    const EventCover = !!cover ? {name: cover.name, src: cover.original} : {
        name: 'کاور',
        src: 'https://static.evand.net/assets/images/defaults/event-cover.jpg'
    };

    const organizationLogo = !!organization.logo ? organization.logo.original :
        'https://www.regionalsan.com/sites/main/files/imagecache/lightbox/main-images/vacant_placeholder_0.gif';

    // @todo change rtl

    let persianDate = moment(start_date, 'YYYY/MM/DD').format('dddd d jMMMM');

    return (
        <StyledEventsSection className='col-12 mx-auto col-sm-5 col-lg-4 col-xl-3 my-2'>

            <img id='cover' src={EventCover.src} alt='cover' className='w-100 mb-3'/>

            <div id='section-content' className='d-flex flex-column w-100 px-3 text-right'>

                <div className='d-flex justify-content-between w-100 align-items-center mb-2'>
                    <Text size={12}>{persianDate}</Text>
                    <Icon name='bookmark'/>
                </div>

                <Text size={16} className='font mb-auto mt-1 '>{name}</Text>

                <div className='d-flex flex-column w-100 mb-1'>
                    <span>
                        <Text className='my-1 align-self-start mr-2' color='lightGray' size={12}>city</Text>
                        <Icon name='location2' color='lightGray'/>
                    </span>
                    <span>
                        <Text className='my-1 align-self-start mr-2' color='lightGray' size={12}>320000</Text>
                        <Icon name='price-tag' color='lightGray'/>
                    </span>

                    <div className='w-100 text-right'>
                        <img id='logo-image' src={organizationLogo} alt="avatar"/>
                        <Text className='' size={12}>{organization.name}</Text>
                    </div>
                </div>

            </div>

        </StyledEventsSection>
    );
};

export default EventsSection;