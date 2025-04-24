import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline
 */
export type PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline = {
  ipAddress: string;
  userAgent: string;
};

/**
 * @internal
 * PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline =
  {
    ip_address: string;
    user_agent: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline
 */
const SchemaIn$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline: z.ZodType<
  PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ip_address: z.string(),
    user_agent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ip_address: "ipAddress",
      user_agent: "userAgent",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline
 */
const SchemaOut$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline: z.ZodType<
  External$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline // the object to be transformed
> = z
  .object({
    ipAddress: z.string(),
    userAgent: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ipAddress: "ip_address",
      userAgent: "user_agent",
    });
  });

export const Schemas$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline =
  {
    in: SchemaIn$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline,
    out: SchemaOut$PaymentIntentCreateBodyMandateDataObj0CustomerAcceptanceOnline,
  };
