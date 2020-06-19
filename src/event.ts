import *  as github from '@actions/github';
import *  as core from '@actions/core';

export function getCreatedtag(): string | null {

    if (github.context.eventName! = 'create') {
        core.info(`github.context.eventName ${github.context.eventName}`)
        return null;
    }

    if (github.context.payload.ref_type != 'tag') {
        core.info('the created refernce was as branch, not a tag');;
        return null;
    }


    return github.context.payload.ref;
}