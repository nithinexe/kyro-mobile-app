import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';

const AuthScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Text style={styles.welcomeSubtitle}>
          Are you ready to get rewarded for recycling
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By logging in or registering, you agree to our{' '}
          <Text style={styles.footerLink}>Terms of Service</Text> and{' '}
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 160,
    height: 160,
  },
  welcomeContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#81C784',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  signInButton: {
    backgroundColor: '#00C853',
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#00C853',
    borderWidth: 2,
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#00C853',
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#9E9E9E',
    textAlign: 'center',
    lineHeight: 16,
  },
  footerLink: {
    color: '#00C853',
    fontWeight: '500',
  },
});

export default AuthScreen;






// import React from 'react';
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   StyleSheet, 
//   SafeAreaView,
//   StatusBar
// } from 'react-native';

// const AuthScreen = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      

//       <View style={{ backgroundColor: 'red', height: 200 }}>
//       <Image
//   source={ require('../assets/images/logo.png')}
//   style={styles.logoImage}
//   resizeMode="contain"
// />
//       </View>
      
//       <View style={styles.welcomeContainer}>
//         <Text style={styles.welcomeTitle}>Welcome to EcoCycle</Text>
//         <Text style={styles.welcomeSubtitle}>
//           Join us in making the world cleaner through responsible e-waste recycling
//         </Text>
//       </View>
      
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity 
//           style={styles.signInButton} 
//           onPress={() => navigation.navigate('SignIn')}
//         >
//           <Text style={styles.signInButtonText}>Sign In</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity 
//           style={styles.signUpButton}
//           onPress={() => navigation.navigate('SignUp')}
//         >
//           <Text style={styles.signUpButtonText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
      
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>
//           By continuing, you agree to our{' '}
//           <Text style={styles.footerLinkText}>Terms</Text> and{' '}
//           <Text style={styles.footerLinkText}>Privacy Policy</Text>
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   logoContainer: {
//     flex: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoCircle: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: '#E8F5E9',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoText: {
//     fontSize: 50,
//   },
//   welcomeContainer: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   welcomeTitle: {
//     fontSize: 28,
//     fontWeight: '600',
//     color: '#2E7D32',
//     marginBottom: 12,
//   },
//   welcomeSubtitle: {
//     fontSize: 16,
//     color: '#4CAF50',
//     textAlign: 'center',
//     lineHeight: 24,
//   },
//   buttonContainer: {
//     flex: 2,
//     paddingHorizontal: 20,
//     justifyContent: 'flex-start',
//   },
//   signInButton: {
//     backgroundColor: '#4CAF50',
//     borderRadius: 12,
//     height: 56,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 16,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   signInButtonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   signUpButton: {
//     backgroundColor: '#FFFFFF',
//     borderColor: '#4CAF50',
//     borderWidth: 2,
//     borderRadius: 12,
//     height: 56,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   signUpButtonText: {
//     color: '#4CAF50',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   footer: {
//     paddingBottom: 30,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   footerText: {
//     fontSize: 14,
//     color: '#666666',
//     textAlign: 'center',
//     lineHeight: 20,
//   },
//   footerLinkText: {
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
// });

// export default AuthScreen;