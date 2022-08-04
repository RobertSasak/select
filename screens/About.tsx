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
    <ScrollView px="5">
      <Heading size="md" py="2">
        Eligibility
      </Heading>
      <P>SeLECT should only be used in people</P>
      <Li>who have suffered an ischemic stroke AND</Li>
      <Li>who are adults aged above 18 years.</Li>
      <P>SeLECT should NOT be used in people with</P>
      <Li>history of seizures or epilepsy OR</Li>
      <Li>hemorrhagic stroke OR</Li>
      <Li>transient ischemic attack OR</Li>
      <Li>
        potentially epileptogenic comorbidities (i.e. intracranial tumour,
        cerebral venous thrombosis, history of severe traumatic brain injury,
        history of brain surgery, etc.)
      </Li>
      <Hr />
      <Heading size="md" py="2">
        Limitations
      </Heading>
      <P>
        SeLECT can aid prognostication of late seizure risk after ischemic
        stroke but its clinical usefulness to influence medical decisions has
        not been tested.
      </P>
      <Hr />
      <Heading size="md" py="2">
        Prediction
      </Heading>
      <P>
        SeLECT provides time-dependent predictions for the absolute risk of late
        seizures after ischemic stroke according to the total SeLECT value. 95%
        confidence intervals (CI) are also displayed.
      </P>
      <Hr />
      <Heading size="md" py="2">
        Performance
      </Heading>
      <P>
        SeLECT was developed in 1200 people in Switzerland and externally
        validated in 1169 people from three international cohorts (Austria,
        Germany, Italy).
      </P>
      <P>Overall discrimination: c statistic of 0.77 (95% CI 0.71 - 0.82).</P>
      <P>
        Overall calibration: calibration plots indicated good fit of predicted
        and observed data.
      </P>
      <Hr />
      <Heading size="md" py="2">
        Reference manuscript:
      </Heading>
      <P>
        <Link href="https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(17)30404-0/fulltext">
          Galovic M, Döhler N, Erdélyi-Canavese B, et al. Prediction of late
          seizures after ischaemic stroke with a novel prognostic model (the
          SeLECT score): a multivariable prediction model development and
          validation study. The Lancet Neurology 2018; 17: 143-52.
        </Link>
      </P>
    </ScrollView>
  </>
)

export default About
