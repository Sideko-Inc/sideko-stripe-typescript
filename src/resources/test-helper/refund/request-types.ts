import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$TestHelperRefundExpireBody,
  Schemas$TestHelperRefundExpireBody,
  TestHelperRefundExpireBody,
} from "@sideko-inc/stripe/types/test-helper-refund-expire-body";
import * as z from "zod";

/**
 * ExpireRequest
 */
export type ExpireRequest = {
  data?: TestHelperRefundExpireBody | undefined;
  refund: string;
};

/**
 * @internal
 * ExpireRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ExpireRequest = {
  data?: External$TestHelperRefundExpireBody | undefined;
  refund: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ExpireRequest
 */
const SchemaIn$ExpireRequest: z.ZodType<
  ExpireRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$TestHelperRefundExpireBody.in.optional(),
    refund: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      refund: "refund",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ExpireRequest
 */
const SchemaOut$ExpireRequest: z.ZodType<
  External$ExpireRequest, // output type of this zod object
  z.ZodTypeDef,
  ExpireRequest // the object to be transformed
> = z
  .object({
    data: Schemas$TestHelperRefundExpireBody.out.optional(),
    refund: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      refund: "refund",
    });
  });

export const Schemas$ExpireRequest = {
  in: SchemaIn$ExpireRequest,
  out: SchemaOut$ExpireRequest,
};
