export const PDD_AD_PLAN_MAX_COST_UPDATE = 'PDD_AD_PLAN_MAX_COST_UPDATE';

/**
 * 接口名称：修改推广计划日限额
 * 接口标识：pdd.ad.plan.max.cost.update
 * 接口使用场景：修改推广计划日限额，推广计划日限额最低100
 **/
export interface PddAdPlanMaxCostUpdateRequestInterface {
  /**
   * @description: 0--搜索广告,1--明星店铺,2--定向广告,3--首页Banner广告（目前只支持0，暂不支持1、2、3）
   * @type: number
   * @default:
   **/
  scene_type?: number;

  /**
   * @description: 计划id
   * @type: string
   * @default:
   **/
  plan_id?: string;

  /**
   * @description: 计划日限额，单位厘
   * @type: string
   * @default:
   **/
  max_cost?: string;
}

/**
 * 接口名称：修改推广计划日限额
 * 接口标识：pdd.ad.plan.max.cost.update
 * 接口使用场景：修改推广计划日限额，推广计划日限额最低100
 **/
export interface PddAdPlanMaxCostUpdateResponseInterface {
  /**
   * @description: 返回response
   * @type: PddAdPlanMaxCostUpdateAdPlanMaxCostUpdateResponseResponseInterface
   * @default:
   *
   **/
  ad_plan_max_cost_update_response: PddAdPlanMaxCostUpdateAdPlanMaxCostUpdateResponseResponseInterface;
}

/**
 * @description 返回response
 * @default
 * @example
 **/
export interface PddAdPlanMaxCostUpdateAdPlanMaxCostUpdateResponseResponseInterface {
  /**
   * @description: 是否成功
   * @type: boolean
   * @default:
   **/
  is_success: boolean;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_PLAN_MAX_COST_UPDATE]: {
    requestInterface: PddAdPlanMaxCostUpdateRequestInterface;
    responseInterface: PddAdPlanMaxCostUpdateResponseInterface;
  };
}
