import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DisputePaymentMethodDetailsCard = {
  /**
   * Card brand. Can be `amex`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  brand: string;
  /**
   * The type of dispute opened. Different case types may have varying fees and financial impact.
   */
  caseType: "chargeback" | "inquiry";
  /**
   * The card network's specific dispute reason code, which maps to one of Stripe's primary dispute categories to simplify response guidance. The [Network code map](https://stripe.com/docs/disputes/categories#network-code-map) lists all available dispute reason codes by network.
   */
  networkReasonCode?: string | null | undefined;
};

/**
 * @internal
 * DisputePaymentMethodDetailsCard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputePaymentMethodDetailsCard = {
  brand: string;
  case_type: "chargeback" | "inquiry";
  network_reason_code?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputePaymentMethodDetailsCard
 */
const SchemaIn$DisputePaymentMethodDetailsCard: z.ZodType<
  DisputePaymentMethodDetailsCard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    brand: z.string(),
    case_type: z.enum(["chargeback", "inquiry"]),
    network_reason_code: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      case_type: "caseType",
      network_reason_code: "networkReasonCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputePaymentMethodDetailsCard
 */
const SchemaOut$DisputePaymentMethodDetailsCard: z.ZodType<
  External$DisputePaymentMethodDetailsCard, // output type of this zod object
  z.ZodTypeDef,
  DisputePaymentMethodDetailsCard // the object to be transformed
> = z
  .object({
    brand: z.string(),
    caseType: z.enum(["chargeback", "inquiry"]),
    networkReasonCode: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      brand: "brand",
      caseType: "case_type",
      networkReasonCode: "network_reason_code",
    });
  });

export const Schemas$DisputePaymentMethodDetailsCard = {
  in: SchemaIn$DisputePaymentMethodDetailsCard,
  out: SchemaOut$DisputePaymentMethodDetailsCard,
};
