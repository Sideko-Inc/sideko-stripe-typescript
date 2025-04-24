import {
  External$SubscriptionSchedule1,
  Schemas$SubscriptionSchedule1,
  SubscriptionSchedule1,
} from "./subscription-schedule1";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type SubscriptionScheduleListResponse = {
  data: SubscriptionSchedule1[];
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: "list";
  /**
   * The URL where this list can be accessed.
   */
  url: string;
};

/**
 * @internal
 * SubscriptionScheduleListResponse without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleListResponse = {
  data: External$SubscriptionSchedule1[];
  has_more: boolean;
  object: "list";
  url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleListResponse
 */
const SchemaIn$SubscriptionScheduleListResponse: z.ZodType<
  SubscriptionScheduleListResponse, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$SubscriptionSchedule1.in)),
    has_more: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      has_more: "hasMore",
      object: "object",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleListResponse
 */
const SchemaOut$SubscriptionScheduleListResponse: z.ZodType<
  External$SubscriptionScheduleListResponse, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleListResponse // the object to be transformed
> = z
  .object({
    data: z.array(z.lazy(() => Schemas$SubscriptionSchedule1.out)),
    hasMore: z.boolean(),
    object: z.enum(["list"]),
    url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hasMore: "has_more",
      object: "object",
      url: "url",
    });
  });

export const Schemas$SubscriptionScheduleListResponse = {
  in: SchemaIn$SubscriptionScheduleListResponse,
  out: SchemaOut$SubscriptionScheduleListResponse,
};
