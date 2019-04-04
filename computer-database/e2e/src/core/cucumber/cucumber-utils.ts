import {HookScenarioResult, pickle} from 'cucumber';
import {JSDOM} from 'jsdom';

export const getFullTags: (scenario: HookScenarioResult) => pickle.Tag[] = (scenario: HookScenarioResult) =>
    scenario.pickle.tags;

export const getTags: (scenario: HookScenarioResult) => string[] = (scenario: HookScenarioResult) =>
    getFullTags(scenario).map(t => t.name);

export const tagExistsByName: (scenario: HookScenarioResult, tagName: string) => boolean = (
    scenario: HookScenarioResult,
    tagName: string
) => !!getFullTags(scenario).find(t => t.name === tagName);

export const SCENARIO_TAGS = {
    SKIP_SETUP: '@SkipSetup',
    FORCE_SETUP: '@ForceSetup'
};
