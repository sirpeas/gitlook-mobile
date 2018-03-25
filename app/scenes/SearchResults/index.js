import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import SceneView from 'components/SceneView';
import Section from 'components/Section';
import User from 'components/User';
import Repository from 'components/Repository';

import styles from './styles';

class SearchResults extends PureComponent {
  _onUserPress = (id) => {

  }

  _onRepositoryPress = (id) => {

  }

  render() {
    return (
      <SceneView align='top'>
        <View style={styles.section}>
          <Section
            headingText='Users'
            items={this.props.users.data}
            itemKey='login'
            isLoading={this.props.users.status.isLoading}
            itemComponent={User}
            itemProps={{
              isLightMode: true,
              onPress: this._onUserPress,
            }}
          />
        </View>
        <View style={styles.section}>
          <Section
            headingText='Repositories'
            items={Object.values(this.props.repositories.data)}
            itemKey='full_name'
            isLoading={this.props.repositories.status.isLoading}
            itemComponent={Repository}
            itemProps={{
              isLightMode: true,
              onPress: this._onRepositoryPress,
            }}
          />
        </View>
      </SceneView>
    )
  }
};

const mapDispatchToProps = {

};

const mapStateToProps = (state) => ({
  users: state.users,
  repositories: state.repositories,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
