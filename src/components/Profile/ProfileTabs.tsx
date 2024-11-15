import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import ProgressTab from './Tabs/ProgressTab'
import AchievementsTab from './Tabs/AchievementsTab'
import StatsTab from './Tabs/StatsTab'
import AboutTab from './Tabs/AboutTab'

const sections = [
  {
    tabName: 'Cursos',
    contentTab: <ProgressTab />
  },
  {
    tabName: 'Achievements',
    contentTab: <AchievementsTab />
  },
  {
    tabName: 'Stats',
    contentTab: <StatsTab />
  },
  {
    tabName: 'About',
    contentTab: <AboutTab />
  }
]

export default function LoginTabs() {
  return (
    <TabGroup className="mx-5">
      <TabList className="flex justify-between gap-x-2 rounded-lg bg-gray-200 p-1 shadow-sm">
        {sections.map(({ tabName }) => (
          <Tab
            key={tabName}
            className="w-full rounded-lg bg-white px-4 py-2 text-center font-semibold shadow-sm outline-none hover:bg-gray-300"
          >
            {tabName}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {sections.map(({ tabName, contentTab }) => (
          <TabPanel key={tabName}>{contentTab}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
