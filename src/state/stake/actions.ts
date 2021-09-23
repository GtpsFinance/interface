import { createAction } from '@reduxjs/toolkit'
import { LairInfo, StakingInfo, SyrupInfo } from './hooks'

export const updateStakingInfo = createAction<StakingInfo[]>('stake/updateStakingInfo')
export const updateLairInfo = createAction<LairInfo>('stake/updateLairInfo')
export const updateSyrupInfo = createAction<SyrupInfo[]>('stake/updateSyrupInfo')
export const updateVeryOldStakingInfo = createAction<StakingInfo[]>('stake/updateVeryOldStakingInfo')
export const updateOldStakingInfo = createAction<StakingInfo[]>('stake/updateOldStakingInfo')
