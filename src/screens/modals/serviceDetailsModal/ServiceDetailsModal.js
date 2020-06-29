import React from 'react';
import PropTypes from 'prop-types';
import { SliderBox } from 'react-native-image-slider-box';
import { ScrollView, TouchableOpacity } from 'react-native';

import { Modal, ButtonText, Button, Spacer } from '@@components';
import { theme, t } from '@@config';
import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';
import { getPictures, getReviews } from '@@store/modules/services/selectors';

import { ServiceDetails, Review } from './components';
import * as S from './styled';

const ServiceDetailsModal = ({ openModal, service, isOwnService }) => (
  <Modal
    name={C.MODALS.SERVICE_DETAILS}
    style={{ width: '90%', overflow: 'hidden' }}
  >
    <>
      <SliderBox
        images={getPictures(service)}
        sliderBoxHeight={300}
        ImageComponentStyle={{
          borderTopLeftRadius: theme.borderRadius.L,
          borderTopRightRadius: theme.borderRadius.L,
          width: '100%',
        }}
      />
      <S.ServiceDetailsContainer>
        <ServiceDetails service={service} />
        {getReviews(service).length ? (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginTop: 6,
                marginLeft: 5,
              }}
            >
              <TouchableOpacity activeOpacity={1}>
                <S.RowContainer>
                  {service.reviews.map(review => (
                    <Review key={review._id} review={review} />
                  ))}
                </S.RowContainer>
              </TouchableOpacity>
            </ScrollView>
            <Spacer height={10} />
          </>
        ) : null}
        {isOwnService ? null : (
          <Button
            rounded
            onPress={() =>
              openModal({ name: C.MODALS.BOOK_APPOINTMENT, data: service })
            }
          >
            <ButtonText>{t('appointments.bookAppointment')}</ButtonText>
          </Button>
        )}
      </S.ServiceDetailsContainer>
    </>
  </Modal>
);

ServiceDetailsModal.propTypes = {
  openModal: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
  isOwnService: PropTypes.bool.isRequired,
};

export default withOpenModal(ServiceDetailsModal);
