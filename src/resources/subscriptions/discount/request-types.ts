import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DeleteRequest
 */
export type DeleteRequest = {
  subscriptionExposedId: string;
};

/**
 * @internal
 * DeleteRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeleteRequest = {
  subscription_exposed_id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeleteRequest
 */
const SchemaIn$DeleteRequest: z.ZodType<
  DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    subscription_exposed_id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscription_exposed_id: "subscriptionExposedId",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeleteRequest
 */
const SchemaOut$DeleteRequest: z.ZodType<
  External$DeleteRequest, // output type of this zod object
  z.ZodTypeDef,
  DeleteRequest // the object to be transformed
> = z
  .object({
    subscriptionExposedId: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscriptionExposedId: "subscription_exposed_id",
    });
  });

export const Schemas$DeleteRequest = {
  in: SchemaIn$DeleteRequest,
  out: SchemaOut$DeleteRequest,
};
