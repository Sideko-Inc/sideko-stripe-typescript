import {
  External$KlarnaAddress,
  KlarnaAddress,
  Schemas$KlarnaAddress,
} from "./klarna-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type KlarnaPayerDetails = {
  address?: KlarnaAddress | undefined;
};

/**
 * @internal
 * KlarnaPayerDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$KlarnaPayerDetails = {
  address?: External$KlarnaAddress | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object KlarnaPayerDetails
 */
const SchemaIn$KlarnaPayerDetails: z.ZodType<
  KlarnaPayerDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$KlarnaAddress.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$KlarnaPayerDetails
 */
const SchemaOut$KlarnaPayerDetails: z.ZodType<
  External$KlarnaPayerDetails, // output type of this zod object
  z.ZodTypeDef,
  KlarnaPayerDetails // the object to be transformed
> = z
  .object({
    address: Schemas$KlarnaAddress.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

export const Schemas$KlarnaPayerDetails = {
  in: SchemaIn$KlarnaPayerDetails,
  out: SchemaOut$KlarnaPayerDetails,
};
