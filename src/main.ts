import * as core from '@actions/core'
import * as event from './event'
import * as version from './version';


async function run(): Promise<void> {
  try {
    const tag = event.getCreatedtag();
    if (tag && version.isSemVer(tag)) {
      // const changelog = await git.getChangesIntroducedByTag(tag)
      // releaseUrl = await github.createReleaseDraft(tag, token, changelog)
    }

    core.setOutput('release-url', 'https://ahmedghoul.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
