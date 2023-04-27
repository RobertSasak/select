import {
  Heading,
  HStack,
  Icon,
  IconButton,
  Link,
  ScrollView,
} from 'native-base'

import Hr from '../components/Hr'
import Li from '../components/Li'
import P from '../components/P'

import { BottomTabScreenProps } from '../navigation/types'

const About = ({ navigation }: BottomTabScreenProps<'About'>) => (
  <>
    <HStack bg="primary.500" safeAreaTop pr="50px" alignItems="center">
      <IconButton
        icon={<Icon name="arrow-left" color="white" size="xl" />}
        onPress={() => navigation.navigate('Calculate')}
      />
      <Heading flex={1} textAlign="center" color="white">
        About
      </Heading>
    </HStack>
    <ScrollView px="5" pb={10}>
      <Heading size="md" py="2">
        Eligibility
      </Heading>
      <P>PRESS should only be used in adults</P>
      <Li>who had an ischaemic stroke AND</Li>
      <Li>
        who have impaired oral intake defined as FOIS ≤ 4 (i.e. oral diet of a
        single consistency or worse)
      </Li>
      <P>PRESS should NOT be used in people with </P>
      <Li>pre-existent dysphagia OR</Li>
      <Li>recurrent stroke within the prediction time-frame OR</Li>
      <Li>late hospital admission &gt; 4 days after stroke onset. </Li>
      <Hr />
      <Heading size="md" py="2">
        Limitations
      </Heading>
      <Li>
        PRESS can aid prognostication of dysphagia recovery but its clinical
        usefulness to influence medical decisions has not been tested.
      </Li>
      <Hr />
      <Heading size="md" py="2">
        Prediction
      </Heading>
      <Li>
        PRESS provides time-dependent predictions for recovery of impaired oral
        intake according to the total PRESS value. 95% confidence intervals (CI)
        are also displayed.
      </Li>
      <Li>
        Guidelines recommend enteral tube feeding if impaired oral intake
        persists for ≥ 7 days after stroke. Percutaneous endoscopic gastrostomy
        (PEG) should be preferred if impaired oral intake persists for ≥ 30 days
        after stroke.
      </Li>
      <Hr />
      <Heading size="md" py="2">
        Performance
      </Heading>
      <Li>
        PRESS was developed in 153 stroke survivors in Switzerland and
        prospectively validated in 126 separate subjects.
      </Li>
      <Li>
        Discrimination in validation cohort: c statistic of 0.84 for predicting
        recovery of oral intake on day 7 and 0.77 on day 30; c statistic of 0.94
        for predicting return to prestroke diet on day 7 and 0.71 on day 30.
      </Li>
      <Li>
        Calibration in validation cohort: high agreement between predicted and
        observed outcomes.
      </Li>
      <Hr />
      <Heading size="md" py="2">
        Reference manuscript:
      </Heading>
      <Link href="https://www.sciencedirect.com/science/article/pii/S1474442217304040">
        Galovic, M. et al. Prediction of late seizures after ischaemic stroke
        with a novel prognostic model (the SeLECT score): a multivariable
        prediction model development and validation study. The Lancet Neurology
        17, 143–152 (2018).
      </Link>
      <Link href="https://jamanetwork-com.ezproxy.uzh.ch/journals/jamaneurology/fullarticle/2802972">
        Sinka, L. et al. Association of Mortality and Risk of Epilepsy With Type
        of Acute Symptomatic Seizure After Ischemic Stroke and an Updated
        Prognostic Model. Jama Neurol 80, (2023). Link:
      </Link>
    </ScrollView>
  </>
)

export default About
