import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native'

export const TermsOfUse = ({ navigation }) => {
  return (
    <>
      <Text style={styles.title}>TERMOS E CONDIÇÕES DE USO</Text>
      <ScrollView style={styles.termsOfuse}>
        <Text style={styles.termsOfuseText}>{textLoremIpsum}</Text>
      </ScrollView>
      <View style={styles.close}>
        <TouchableWithoutFeedback onPress={e => navigation.navigate('Register')}>
          <Text style={styles.closeText}>FECHAR</Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    textAlign: 'center',
    color: 'rgb(167, 167, 167)',
  },
  termsOfuse: {
    marginTop: 20,
    marginBottom: 20,
  },
  termsOfuseText: {
    color: '#afafaf',
    fontSize: 14,
  },
  close: {
    backgroundColor: '#f06360',
    borderRadius: 3,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: {
    fontWeight: 'bold',
    color: '#fff',
  },
})

const textLoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales placerat odio ac cursus. Phasellus dapibus, nibh nec vehicula rutrum, urna nibh suscipit mi, vitae commodo magna urna et justo. In sit amet velit dolor. Cras sed magna nec dolor iaculis feugiat non quis ex. Aliquam erat volutpat. Fusce aliquam arcu lectus, eget sollicitudin nisi eleifend ut. Etiam sed tincidunt orci, sit amet semper neque. In rhoncus enim non placerat pellentesque. Mauris faucibus ante sit amet massa scelerisque, id tempus mi viverra. Sed iaculis fermentum volutpat. Donec fringilla fermentum nibh, eu commodo turpis cursus at. Phasellus risus elit, hendrerit quis elit a, ultrices eleifend odio. Sed aliquam erat metus, ac egestas ante imperdiet id. In a mattis libero.

Nam efficitur tincidunt aliquam. Quisque suscipit auctor felis. Cras a vulputate nulla. Nunc tempus commodo libero, in varius neque consequat sit amet. Mauris odio metus, tristique eu varius sed, dignissim vel ex. Curabitur nec commodo ipsum. Duis ultrices, sem lacinia egestas viverra, nibh leo luctus ligula, quis viverra ante quam sed urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed vestibulum augue gravida purus fringilla dapibus. Aliquam erat risus, lobortis sed velit eget, blandit maximus odio. Cras at leo a lorem lacinia vestibulum. Aliquam lorem diam, interdum eget est a, hendrerit semper massa. Donec sit amet facilisis nunc, vestibulum egestas nisi.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper turpis a lorem mattis eleifend. Sed dignissim tincidunt nisl at tincidunt. Mauris non sodales justo. Aliquam congue nisi in mi sagittis, id tincidunt sem ullamcorper. Duis sed venenatis enim. Vestibulum sollicitudin sem lobortis, efficitur eros ac, mattis velit. Ut volutpat, urna sed ornare semper, quam lectus placerat ex, non vestibulum urna nulla et quam. Fusce congue efficitur sapien, eget hendrerit turpis auctor tincidunt. Integer pretium vitae risus sit amet tristique. Donec vitae lorem quis erat dictum facilisis eget sit amet turpis. Vivamus laoreet posuere rutrum. Sed venenatis ex nec efficitur rhoncus. Maecenas luctus mi pulvinar tempor volutpat. Nunc tempor convallis tristique.
`
