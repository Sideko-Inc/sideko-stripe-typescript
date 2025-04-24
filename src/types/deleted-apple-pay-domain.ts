import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedApplePayDomain = {
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "apple_pay_domain";
};

/**
 * @internal
 * DeletedApplePayDomain without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedApplePayDomain = {
  deleted: boolean;
  id: string;
  object: "apple_pay_domain";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedApplePayDomain
 */
const SchemaIn$DeletedApplePayDomain: z.ZodType<
  DeletedApplePayDomain, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["apple_pay_domain"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedApplePayDomain
 */
const SchemaOut$DeletedApplePayDomain: z.ZodType<
  External$DeletedApplePayDomain, // output type of this zod object
  z.ZodTypeDef,
  DeletedApplePayDomain // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["apple_pay_domain"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedApplePayDomain = {
  in: SchemaIn$DeletedApplePayDomain,
  out: SchemaOut$DeletedApplePayDomain,
};
