import PropTypes from 'prop-types';

import * as S from 'components/container/styles';

function Container({ children }) {
  return <S.Container>{children}</S.Container>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
