export const PDD_AD_PLAN_INFO_LIST_GET = 'PDD_AD_PLAN_INFO_LIST_GET';

/**
 * 接口名称：获取现有计划基础信息
 * 接口标识：pdd.ad.plan.info.list.get
 * 接口使用场景：获取现有计划基础信息
 **/

export interface PddAdPlanInfoListGetRequestInterface {
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
  plan_id: string;
}

/**
 * 接口名称：获取现有计划基础信息
 * 接口标识：pdd.ad.plan.info.list.get
 * 接口使用场景：获取现有计划基础信息
 **/

export interface PddAdPlanInfoListGetResponseInterface {
  /**
   * @description: 计划基础信息表
   * @type: PddAdPlanInfoListGetAdPlanInfoListResponseResponseInterface
   * @default:
   *
   **/
  ad_plan_info_list_response: PddAdPlanInfoListGetAdPlanInfoListResponseResponseInterface;
}

/**
 * @description 计划基础信息表
 * @default
 * @example
 **/

export interface PddAdPlanInfoListGetAdPlanInfoListResponseResponseInterface {
  /**
   * @description: 计划基础信息对象
   * @type: PddAdPlanInfoListGetAdPlanInfoListResponsePlanInfoListResponseInterface[]
   * @default:
   *
   **/
  plan_info_list: PddAdPlanInfoListGetAdPlanInfoListResponsePlanInfoListResponseInterface[];
}

/**
 * @description 计划基础信息对象
 * @default
 * @example
 **/

export interface PddAdPlanInfoListGetAdPlanInfoListResponsePlanInfoListResponseInterface {
  /**
   * @description: 推广单元个数
   * @type: string
   * @default:
   **/
  unit_num: string;

  /**
   * @description: 计划日限额，单位厘
   * @type: string
   * @default:
   **/
  max_cost: string;

  /**
   * @description: 1 - 余额充足 2 - 余额不足 3 - 超出消耗上限
   * @type: number
   * @default:
   **/
  merchant_account_status: number;

  /**
   * @description: 1 - 已启用 2 - 已暂停
   * @type: number
   * @default:
   **/
  merchant_operate_status: number;

  /**
   * @description: 0 - 搜索广告
   * @type: number
   * @default:
   **/
  scene_type: number;

  /**
   * @description: 计划名
   * @type: string
   * @default:
   **/
  plan_name: string;

  /**
   * @description: 计划id
   * @type: string
   * @default:
   **/
  plan_id: string;
}

// 导出默认分类
export default interface InterfaceDefaultInterface {
  [PDD_AD_PLAN_INFO_LIST_GET]: {
    requestInterface: PddAdPlanInfoListGetRequestInterface;
    responseInterface: PddAdPlanInfoListGetResponseInterface;
  };
}